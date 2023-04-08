import Link from "next/link"
import Text from '/components/text.js';

export default function Games() {
  return (
    <Text>
      <h1>Games</h1>
      <ul>
        <li><Link href="https://steamcommunity.com/id/jelle619/games/">Steam</Link></li>
        <li><Link href="https://www.gog.com/u/jelle619/games">GOG.com</Link></li>
      </ul>
    </Text>
  )
}