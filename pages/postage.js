import Image from 'next/image'
import Text from '/components/text.js';

export default function Postage() {
  return (
    <Text>
      <h1>Postage</h1>
      Sending letters around the world is a hobby I quite enjoy. Over time, I started looking into ways to make my letters more unique, personal and special. The result of this you can see below.

      <h2>Stamp Collection</h2>
      <p>I'm not a stamp collector myself, but I do get stamps printed to be collected — hence, the stamp collection. This page provides an overview of all the different stamps that I have had printed. Each series features unique artwork and is a limited print. Acquiring these stamps is possible by giving me a good reason to write you a letter!</p>

      <h3>Series 1</h3>
      <Image placeholder="blur" src={require('/public/images/stamps/sheets/1.png')}></Image>

      <h3>Series 2</h3>
      <Image placeholder="blur" src={require('/public/images/stamps/sheets/2.png')}></Image>

      <h3>Series 3</h3>
      <Image placeholder="blur" src={require('/public/images/stamps/sheets/3.png')}></Image>

      <h3>Series 4</h3>
      <Image placeholder="blur" src={require('/public/images/stamps/sheets/4.png')}></Image>

      <h2>QSL cards</h2>
      <p>A QSL card is a confirmation of a connection between two amateur radio (HAM) radio stations in the shape of a postcard, and they are often collected by radio amateurs. As a (soon to be) operator myself, you may request a QSL card from me when establishing a connection.</p>

      <h3>Traditional Series</h3>
      <p>QSL cards for establishing a direct connection with me through methods such as FM, AM and SSB.</p>
      <p>Coming soon!</p>

      <h3>DMR/IRLP Series</h3>
      <p>Networks such as Brandmeister (DMR) and the Internet Radio Linking Project make it much easier to establish connections over longer distances by utilising an array of repeaters with global coverage. Traditionally, no QSL card is awarded for these types of connections as no direct connection is established (apart from ones to nearby repeaters). Despite this, I will still send out QSL cards in situations such as these, though they are distinguished from traditional cards for clarity.</p>
      <p>Coming soon!</p>
    </Text>
  )
}