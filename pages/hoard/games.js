import Link from "next/link"
import Text from '/components/text.js';
import { SiSteam, SiGogdotcom, SiXbox } from 'react-icons/si';

export default function Games() {
  return (
    <Text>
      <h1>Games</h1>
      <ul>
        <li><SiSteam/> <Link target="_blank" href="https://steamcommunity.com/id/jelle619/games/">Steam</Link></li>
        <li><SiGogdotcom/> <Link target="_blank" href="https://www.gog.com/u/jelle619/games">GOG.com</Link></li>
        <li><SiXbox/> <Link target="_blank" href="https://account.xbox.com/profile?gamertag=jelle619">Xbox</Link></li>
      </ul>
    </Text>
  )
}