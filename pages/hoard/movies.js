import Image from 'next/image'

import data from '/public/json/hoard/movies.json'

import Text from '/components/text.js';

export default function Movies() {
  return (
    <Text>
      <h1>Movies</h1>

      {data.map((movie, index) => (
        <Image width="200" height="300" alt={movie.title} placeholder="blur" src={require('/public/images/hoard/movies/' + movie.uuid + '.jpg')}></Image>
      ))}

    </Text>
  )
}