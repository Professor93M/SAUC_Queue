import React from "react";

export default function Video({ poster, clip }) {
    return (
        <div
            style={{ zIndex: -1 }}
            className="w-full h-screen opacity-10  fixed "
        >
            <video
                autoPlay
                loop
                muted
                poster={poster}
                className="w-full h-full opacity-10"
            >
                <source src={clip} type="video/mp4" />
            </video>
        </div>
    );
}
