import React from "react";
import './Footer.css';
var FontAwesome = require('react-fontawesome');

const Footer = () => {
    var date = new Date();
    var curretYear = date.getFullYear();
    return (
        <div class="vk-flex-container bg-blk">
            <div id="vk-footer">
                <a href="https://www.instagram.com/valere_4ever_young/" target="_blank">
                    <FontAwesome
                        name='instagram'
                        size='1x'
                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', margin: '0 20px' }}
                    /></a>

                <a href="https://www.facebook.com/valere.kissi.3/" target="_blank">
                    <FontAwesome
                        name='facebook'
                        size='1x'
                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', margin: '0 20px' }}
                    /></a>

                <a href="https://www.youtube.com/channel/UCsT3qb37M9pERgRUhLyFaUQ/" target="_blank">
                    <FontAwesome
                        name='youtube'
                        size='1x'
                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', margin: '0 20px' }}
                    /></a>

                <a href="https://www.linkedin.com/in/valerekissi/" target="_blank">
                    <FontAwesome
                        name='linkedin'
                        size='1x'
                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', margin: '0 20px' }}
                    /></a>

            </div>
            <div class="copy-container">
                ©2021-{curretYear} Valere Kissi.
            </div>
        </div>
    );
};

export default Footer;