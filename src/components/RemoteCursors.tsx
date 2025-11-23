"use client";

import { SocketContext, User, UserMap } from "@/contexts/socketio";
import { useMouse } from "@/hooks/use-mouse";
import { useThrottle } from "@/hooks/use-throttle";
import { MousePointer2 } from "lucide-react";
import React, { useContext, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useMediaQuery } from "@/hooks/use-media-query";

const RemoteCursors = () => {
  const { socket, users: _users, setUsers } = useContext(SocketContext);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { x, y } = useMouse({ allowPage: true });

  useEffect(() => {
    if (typeof window === "undefined" || !socket || isMobile) return;

    socket.on("cursor-changed", (data) => {
      setUsers((prev: UserMap) => {
        const newMap = new Map(prev);

        if (!prev.has(data.socketId)) {
          newMap.set(data.socketId, {
            ...data,
          });
        } else {
          newMap.set(data.socketId, { ...prev.get(data.socketId), ...data });
        }

        return newMap;
      });
    });

    socket.on("users-updated", (data: User[]) => {
      const newMap = new Map();
      data.forEach((user) => {
        newMap.set(user.socketId, { ...user });
      });
      setUsers(newMap);
    });

    return () => {
      socket.off("cursor-changed");
    };
  }, [socket, isMobile]);

  const handleMouseMove = useThrottle((x, y) => {
    socket?.emit("cursor-change", {
      pos: { x, y },
      socketId: socket.id,
    });
  }, 200);

  useEffect(() => {
    if (isMobile) return;
    handleMouseMove(x, y);
  }, [x, y, isMobile]);

  const users = Array.from(_users.values());

  return (
    <div className="h-0 z-10 relative pointer-events-none">
      {users
        .filter((user) => user.socketId !== socket?.id)
        .map((user) => (
          <Cursor
            key={user.socketId}
            x={user.pos.x}
            y={user.pos.y}
            color={user.color || "hsl(25 95% 53%)"}
            socketId={user.socketId}
            headerText={`${user.location} ${user.flag}`}
          />
        ))}
    </div>
  );
};

const Cursor = ({
  color,
  x,
  y,
  headerText,
  socketId,
}: {
  x: number;
  y: number;
  color?: string;
  headerText: string;
  socketId: string;
}) => {
  const [showText, setShowText] = useState(false);
  const [msgText, setMsgText] = useState("");
  const { msgs } = useContext(SocketContext);

  useEffect(() => {
    setShowText(true);
    const fadeOutTimeout = setTimeout(() => {
      setShowText(false);
    }, 3000);

    return () => {
      clearTimeout(fadeOutTimeout);
    };
  }, [x, y, msgText]);

  useEffect(() => {
    if (msgs.at(-1)?.socketId === socketId) {
      const lastMsgContent = msgs.at(-1)?.content || "";
      const textSlice =
        lastMsgContent.slice(0, 30) + (lastMsgContent.length > 30 ? "..." : "");
      const timeToRead = Math.min(4000, Math.max(textSlice.length * 100, 1000));
      setMsgText(textSlice);

      const t = setTimeout(() => {
        setMsgText("");
        clearTimeout(t);
      }, timeToRead);
    }
  }, [msgs]);

  // Convert color to HSL if it's a hex color, or use primary color as fallback
  const cursorColor = color || "hsl(25 95% 53%)";
  const isHexColor = cursorColor.startsWith("#");
  const bgColor = isHexColor 
    ? cursorColor + "f0" 
    : cursorColor.replace(")", " / 0.94)").replace("hsl(", "hsla(");

  return (
    <motion.div
      animate={{
        x: x,
        y: y,
      }}
      className="w-6 h-6 pointer-events-none"
      transition={{
        duration: 0.2,
        ease: "easeOut",
      }}
      onMouseEnter={() => setShowText(true)}
      onMouseLeave={() => setShowText(false)}
    >
      <MousePointer2
        className="w-6 h-6 z-[9999999] drop-shadow-lg"
        style={{ color: cursorColor }}
        strokeWidth={2.5}
        fill={cursorColor}
      />

      <AnimatePresence>
        {showText && headerText && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: -7, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="text-xs rounded-xl w-fit p-2.5 px-4 ml-4 pointer-events-auto"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(12px)",
              border: `1px solid ${cursorColor}40`,
              boxShadow: "0 8px 32px rgba(15, 23, 42, 0.12), 0 0 0 1px rgba(255, 255, 255, 0.5) inset",
            }}
          >
            <div className="text-nowrap font-semibold text-foreground/90" style={{ color: cursorColor }}>
              {headerText}
            </div>
            {msgText && (
              <div className="font-mono text-xs text-muted-foreground mt-1.5 max-w-[200px] leading-relaxed">
                {msgText}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default RemoteCursors;

