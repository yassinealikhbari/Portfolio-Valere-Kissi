import React from "react";
import { VideoPlayer } from "../videoplayer/VideoPlayer";
import "./Showreels.css";

export interface IShowreelsProps { }

export interface IShowreelsState { }

export class Showreels extends React.Component<IShowreelsProps, IShowreelsState> {
    constructor(props: IShowreelsProps) {
        super(props);
        this.state = {};
    }

    public render() {
        return (
            <div className="vk-flex-container">
                <div className="reel-container">
                    <h3 id="showreel-subtitle">SHOWREEL</h3>
                    <VideoPlayer youtubeId="R7lVdnZofRg"></VideoPlayer>
                </div>
            </div>
        );
    };
}