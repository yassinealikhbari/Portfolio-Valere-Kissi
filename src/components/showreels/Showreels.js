import React from "react";
import VideoPlayer from "./../videoplayer/VideoPlayer";
import "./Showreels.css";

const Showreels = () => {
    return (
        <div class="vk-flex-container">
            <div class="reel-container">
                <h3 id="showreel-subtitle">SHOWREEL</h3>
                <VideoPlayer youtubeId="R7lVdnZofRg"></VideoPlayer>
            </div>
        </div>
    );
};

export default Showreels;