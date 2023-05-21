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
      
    </Text>
  )
}