import React from "react";
import CustomImage from "../../components/CustomImage";
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';

const Warface = () => {
    return (
        <div className="grid grid-cols-12 h-48 mt-12">
            <div className="col-span-5 bg-red-500">
                <div className="grid grid-cols-7 gap-2">
                    <div className="col-span-3">
                        <CustomImage
                            image="https://market.my.games/s3/media/game/icon/2020/6/f7f156be282610e2d46ab78ae702fe04.png"
                            class="object-fill w-full h-48"
                        />
                    </div>
                    <div className="col-span-4">
                        <h1>Warface</h1>
                        <p className="overflow-hidden">
                            Warface — компьютерная игра в жанре массового многопользовательского онлайн-шутера от первого лица.
                        </p>
                        <div className="grid grid-cols-5 gap-4">
                            <div className="col-span-3">
                                <Button size="small" variant="contained"><FavoriteIcon /> Отслеживать</Button>
                            </div>
                            <div className="col-span-2">
                                <Button size="small" variant="contained">Об игре</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-7 bg-green-500">

            </div>
        </div>
    )
}

export default Warface;