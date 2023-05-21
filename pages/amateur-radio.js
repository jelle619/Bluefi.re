import Image from 'next/image'
import Link from 'next/link'
import Text from '/components/text.js';

export default function AmateurRadio() {
  return (
    <Text>
      <h1>Amateur Radio</h1>
      Amateur radio, also known as ham radio, is a hobby that involves using radio waves to communicate with other enthusiasts around the world. It offers a unique opportunity to connect with people from diverse cultures, requires technical knowledge and skill, and can be a valuable resource in times of emergency.

      <h2>Information</h2>
      <ul>
        <li>License: Novice</li>
        <li>Call sign: t.b.d.</li>
        <li>DMR ID: t.b.d.</li>
      </ul>

      <h2>Equipment</h2>
      <ul>
        <li><Link href="https://www.baofengradio.com/products/catalog-uv-5r" target="_blank">Baofeng UV-5R</Link></li>
        <li><Link href="https://www.anytone.net/video/products-detail-935380" target="_blank">AnyTone AT-D878UVII Plus</Link></li>
        <li><Link href="https://github.com/phl0/MMDVM_HS_Dual_Hat" target="_blank">MMDVM_HS_Dual_Hat</Link></li>
      </ul>

      <h2>QSL cards</h2>
      <p>A QSL card is a confirmation of a connection between two amateur radio stations in the shape of a postcard, and they are often collected by radio amateurs. As an operator myself, you may request a QSL card from me when establishing a connection.</p>
      <Image placeholder="blur" src={require('/public/images/amateur-radio/qsl-card.png')}></Image>
      <p>To get a QSL card from yours truly, you can send a QSL card to my address and I will send back mine to the sender's address. Alternatively, you can request a QSL card by contacting me.</p>
    </Text>
  )
}