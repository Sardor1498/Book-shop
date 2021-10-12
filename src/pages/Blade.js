import React from "react";
import CustomImage from "../components/CustomImage";

const Blade = () => {
    return (
        <div className="text-white text-3xl bg-red-500 h-screen">
            Bu Blade saxifasi
            <CustomImage
                image="https://market.my.games/s3/media/game/icon/2020/6/f7f156be282610e2d46ab78ae702fe04.png"
                class="w-full h-screen w-1/2"
            />
        </div>
    )
}
export default Blade;