import React, { useState } from "react";

const FILE_ICONS = {
  tsx: { color: "text-[oklch(0.65_0.18_220)]", icon: "⚛" },
  ts: { color: "text-[oklch(0.6_0.15_230)]", icon: "◆" },
  jsx: { color: "text-sky-400", icon: "⚛" },
  js: { color: "text-yellow-500", icon: "◆" },
  css: { color: "text-purple-400", icon: "◈" },
  json: { color: "text-amber-400", icon: "{}" },
  md: { color: "text-zinc-400", icon: "◊" },
  swift: { color: "text-orange-500", icon: "◇" },
  spotify: { color: "text-emerald-500", icon: "♫" },
  svg: { color: "text-emerald-400", icon: "◐" },
  png: { color: "text-emerald-300", icon: "◑" },
  default: { color: "text-zinc-400", icon: "◇" },
};

const getFileIcon = (ext) => FILE_ICONS[ext || "default"] || FILE_ICONS.default;

function FileItem({ node, depth, onSelect }) {
  const [isOpen, setIsOpen] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const isFolder = node.type === "folder";
  const hasChildren = isFolder && node.children && node.children.length > 0;
  const fileIcon = getFileIcon(node.extension);

  const handleClick = () => {
    if (isFolder) setIsOpen(!isOpen);
    else onSelect?.(node);
  };

  return (
    <div className="select-none">
      <div
        className={`group relative flex items-center gap-2 py-[5px] px-1.5 rounded-md cursor-pointer transition-colors duration-200 ${
          isHovered ? "bg-zinc-100" : ""
        }`}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ paddingLeft: `${depth * 14 + 8}px` }}
      >
        {depth > 0 && (
          <div
            className="absolute top-0 bottom-0 flex"
            style={{ left: `${(depth - 1) * 16 + 16}px` }}
          >
            <div
              className={`w-px transition-colors duration-200 ${
                isHovered ? "bg-indigo-400/60" : "bg-zinc-300"
              }`}
            />
          </div>
        )}

        <div
          className={`flex items-center justify-center w-4 h-4 transition-transform duration-200 ease-out ${
            isFolder && isOpen ? "rotate-90" : ""
          }`}
        >
          {isFolder ? (
            <svg
              width="6"
              height="8"
              viewBox="0 0 6 8"
              fill="none"
              className={`transition-colors duration-200 ${
                isHovered ? "text-indigo-500" : "text-zinc-400"
              }`}
            >
              <path
                d="M1 1L5 4L1 7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <span
              className={`inline-block w-3 text-center text-[11px] leading-none transition-opacity duration-200 ${fileIcon.color}`}
            >
              {fileIcon.icon}
            </span>
          )}
        </div>

        <div
          className={`flex items-center justify-center w-5 h-5 rounded transition-all duration-200 ${
            isFolder
              ? isHovered
                ? "text-indigo-500 scale-110"
                : "text-indigo-400/80"
              : isHovered
              ? `${fileIcon.color} scale-110`
              : `${fileIcon.color} opacity-70`
          }`}
        >
          {isFolder ? (
            <svg width="16" height="14" viewBox="0 0 16 14" fill="currentColor">
              <path d="M1.5 1C0.671573 1 0 1.67157 0 2.5V11.5C0 12.3284 0.671573 13 1.5 13H14.5C15.3284 13 16 12.3284 16 11.5V4.5C16 3.67157 15.3284 3 14.5 3H8L6.5 1H1.5Z" />
            </svg>
          ) : (
            <svg width="14" height="16" viewBox="0 0 14 16" fill="currentColor" opacity="0.8">
              <path d="M1.5 0C0.671573 0 0 0.671573 0 1.5V14.5C0 15.3284 0.671573 16 1.5 16H12.5C13.3284 16 14 15.3284 14 14.5V4.5L9.5 0H1.5Z" />
              <path d="M9 0V4.5H14" fill="currentColor" fillOpacity="0.5" />
            </svg>
          )}
        </div>

        <span
          className={`font-mono text-[13px] whitespace-nowrap transition-colors duration-200 ${
            isFolder
              ? isHovered
                ? "text-zinc-900"
                : "text-zinc-800"
              : isHovered
              ? "text-zinc-900"
              : "text-zinc-500"
          }`}
        >
          {node.name}
        </span>

        <div
          className={`absolute right-2 w-1.5 h-1.5 rounded-full bg-indigo-500 transition-all duration-200 ${
            isHovered ? "opacity-100 scale-100" : "opacity-0 scale-0"
          }`}
        />
      </div>

      {hasChildren && (
        <div
          className={`overflow-hidden transition-all duration-300 ease-out ${
            isOpen ? "opacity-100" : "opacity-0 h-0"
          }`}
          style={{ maxHeight: isOpen ? `${node.children.length * 100}px` : "0px" }}
        >
          {node.children.map((child) => (
            <FileItem key={child.name} node={child} depth={depth + 1} onSelect={onSelect} />
          ))}
        </div>
      )}
    </div>
  );
}

export function FileTree({ data, className = "", onSelect }) {
  return (
    <div
      className={`rounded-lg border border-zinc-200 bg-white/80 backdrop-blur-sm p-2.5 font-mono shadow-[0_4px_24px_-8px_rgba(0,0,0,0.08)] ${className}`}
    >
      {/* Header — traffic lights */}
      <div className="flex items-center gap-2 pb-2 mb-1.5 border-b border-zinc-200/70">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[oklch(0.65_0.2_25)]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[oklch(0.75_0.18_85)]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[oklch(0.65_0.18_150)]" />
        </div>
        <span className="text-xs text-zinc-500 ml-2">explorer</span>
      </div>

      <div className="space-y-0.5">
        {data.map((node) => (
          <FileItem key={node.name} node={node} depth={0} onSelect={onSelect} />
        ))}
      </div>
    </div>
  );
}
