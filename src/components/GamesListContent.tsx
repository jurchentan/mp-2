import {useEffect, useState} from 'react';
import type { GamesProps } from "../types.ts";
import GamesPreview from "../GamesPreview.tsx";
import basketball from "../basketball.png"

export default function GamesListContent() {
    const [inputNumGames, setInputNumGames] = useState(5);
    const [numGames, setNumGames] = useState(5);
    const [games, setGames] = useState<GamesProps[]>([]);

    useEffect(() => {
        async function fetchData() {
            setGames([]);

            const res = await fetch(`https://api.server.nbaapi.com/api/games?page=1&pageSize=${numGames}`);

            const jsonRes = await res.json();
            setGames(jsonRes.data);
        }
        fetchData()
            .then(()=>console.log("okay"))
            .catch((e)=>console.log("error" + e))
    }, [numGames])
    return (
        <div>
            <div>

                <img id="logo" src = {basketball} alt="Basketball Logo"></img>
                <h2>Basketball Games Data</h2>
                <p>Input the number of Basketball Games data you want to obtain!</p>
                <input type="number" value={inputNumGames} onChange={(e) => setInputNumGames( Number(e.target.value))}/>

                <button onClick={() => setNumGames(inputNumGames)}>Enter</button>
                <p>Number of Games: {numGames}</p>
                <div>
                    {games.map((a) => {
                        return <GamesPreview Games={a}/>;
                        }
                    )}
                </div>

            </div>
            <footer>
                <p>
                    Disclaimer: this was supposed to be a soccer API, but after building the entire interface, I realized the soccer API may not be CORS available, despite saying otherwise on the website.


                </p>
                <p>
                    <a href="https://github.com/azharimm/football-standings-api">Football Standings API</a>
                </p>
                <p>All Rights Reserved by Alex Tom&#169;
                </p>
            </footer>
        </div>
    )
}