import Link from "next/link"
import Text from '/components/text.js';
import { SiSteam, SiGogdotcom, SiXbox } from 'react-icons/si';
import Image from "next/image"

export default function Games(props) {
  return (
    <Text>
      <h1>Games</h1>

      <h2>Steam</h2>
      <p>List of games owned on Steam, not including free games.</p>
      <ul>
      {props["steam"].map((game, index) => (
            <li key={game.appid}>{game.name || game.appid}</li>
      ))}
      </ul>
      {/* {props["steam"].map((game, index) => (
            <Image width="231" height="87" key={game.appid} alt={game.name} src={"https://cdn.cloudflare.steamstatic.com/steam/apps/" + game.appid + "/capsule_231x87.jpg"}/>
      ))} */}
      
      <h2>Profiles</h2>
      <ul>
        <li><SiSteam/> <Link target="_blank" href="https://steamcommunity.com/id/jelle619/games/">Steam</Link></li>
        <li><SiGogdotcom/> <Link target="_blank" href="https://www.gog.com/u/jelle619/games">GOG.com</Link></li>
        <li><SiXbox/> <Link target="_blank" href="https://account.xbox.com/profile?gamertag=jelle619">Xbox</Link></li>
      </ul>
    </Text>
  )
}

export async function getStaticProps() {
  const url = 'http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=' + process.env.STEAM_WEB_API + '&steamid=76561198061580265&format=json&include_appinfo=true&include_played_free_games=false'
  console.log(url);
  const res = await fetch(url);
  const steam = await res.json();
  console.log(steam);

  const sortedSteam = steam.response.games.sort((a, b) => {
    const nameA = a.name;
    const nameB = b.name;
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    // names must be equal
    return 0;
  })

  return {
    props: {
      steam: sortedSteam
    },
  }
}