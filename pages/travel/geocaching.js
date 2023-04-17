import Text from '/components/text.js';
import Image from 'next/image'
import Link from 'next/link';

export default function Geocaching() {

  return (
    <Text>
      <h1>Geocaching</h1>
      <p>Geocaching is an outdoor recreational activity in which participants use a GPS receiver or mobile device to hide and seek containers, called "geocaches" or "caches", at specific locations marked by coordinates all over the world. It combines elements of hiking, problem solving, and navigation, and can be enjoyed by people of all ages. Participants log their finds and often leave trinkets or notes in the caches they find, creating a global network of treasure hunters and a sense of community.</p>

      <h2>Finds</h2>
      <Image width="200" height="50" src="https://img.geocaching.com/stats/img.aspx?txt=Geocaching.com&uid=3c88ab4b-6bba-4872-8bd3-399218cd7d79"/>
      <Image width="220" height="50" src="https://www.opencaching.de/statpics/DE/436961.jpg"/>
      <Image width="220" height="50" src="https://www.opencaching.nl/stats/statPic/16349"/>
      <p>For more information, visit my profile on any of the following Geocaching websites.</p>
      <ul>
        <li><Link href="https://www.geocaching.com/p/?guid=3c88ab4b-6bba-4872-8bd3-399218cd7d79">Geocaching.com</Link></li>
        <li><Link href="https://www.opencaching.de/viewprofile.php?userid=436961">Opencaching.de</Link></li>
        <li><Link href="https://www.opencaching.nl/viewprofile.php?userid=16349">Opencaching.nl</Link></li>
      </ul>
      <p>Further statistics for Geocaching.com can be found on <Link href="https://project-gc.com/ProfileStats/jelle619">GC-Project</Link>.</p>

      <h2>Travel Bugs</h2>
      <p>Travel Bugs are trackable items used in geocaching that have a unique tracking number engraved on them. Participants place the travel bugs in caches and log their movements online, allowing them to track the progress of the bugs as they are carried from cache to cache by other geocachers. Some travel bugs have specific goals, such as visiting a certain location or traveling a set distance, and geocachers can help facilitate these goals by moving the bugs along and logging their movements. Travel bugs can be any small item, such as a keychain, toy or small trinket, and serve as a fun way to add an extra level of excitement and challenge to the game of geocaching. Below is a list of Travel Bugs that were released by me.</p>

      <ul>
        <li><Link href="https://www.geocaching.com/track/details.aspx?id=7519773">Campfire</Link></li>
        <li><Link href="https://www.geocaching.com/track/details.aspx?id=8346963">Kissing Dragons</Link></li>
        <li><Link href="https://www.geocaching.com/track/details.aspx?id=8719520">Out and About</Link></li>
      </ul>

    </Text>
  )
}