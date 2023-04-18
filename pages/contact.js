import Link from 'next/link';
import Text from '/components/text.js';
import Form from '/components/form.js';

export default function Contact() {
    return (
        <Text>
            <h1>Contact</h1>
            <ul>
                <li>E-mail: public@bluefi.re</li>
                <li>Telegram: jelle619</li>
                <li>Discord: Bluefire#9412</li>
            </ul>

            <h2>Form</h2>

            <Form></Form>

            <h2>Directions</h2>

            <details>
                <summary>Train</summary>
                The closest train station near me is Sittard. As such, it is best to take this as your end destination when travelling by public transport. Alternatively, you could travel to the second-closest station: Heerlen.

                <ul>
                    <li><Link href="https://maps.apple.com/?daddr=Station+Sittard,+Stationsplein+2,+6131+AS+Sittard&dirflg=r&t=r" target="_blank">Maps</Link></li>
                    <li><Link href="https://www.ns.nl/reisplanner/#/?aankomst=Sittard&aankomsttype=treinstation" target="_blank">Nederlandse Spoorwegen</Link></li>
                    <li><Link href="https://reiseauskunft.bahn.de/bin/query.exe/en?REQ0JourneyStopsZID=A%3D1%40O%3DSittard%40X%3D5858513%40Y%3D51001603%40U%3D80%40L%3D008400564%40B%3D1%40p%3D1678131333%40" target="_blank">Deutsche Bahn</Link></li>
                </ul>

                When travelling from or through Germany, crossing the border into the Netherlands can increase travel times significantly. In this case, I would recommend setting the train station in Herzogenrath as your destination, which is situated close to the Dutch border. Alternatively, you could also get out at Übach-Palenberg.

                <ul>
                    <li><Link href="https://maps.apple.com/?daddr=Bahnhof+Herzogenrath,+Bahnhofstraße+15,+52134+Herzogenrath&dirflg=d&t=m" target="_blank">Maps</Link></li>
                    <li><Link href="https://reiseauskunft.bahn.de/bin/query.exe/en?REQ0JourneyStopsZID=A%3D1%40O%3DHerzogenrath%40X%3D6094489%40Y%3D50870918%40U%3D81%40L%3D008002806%40B%3D1%40p%3D1673463547%40" target="_blank">Deutsche Bahn</Link></li>
                </ul>

            </details>

            <details>
                <summary>Car</summary>
                When taking the car, drive in the direction of Maastricht, Netherlands. For more specific directions, please contact me.<br />
                <ul>
                    <li><Link href="https://maps.apple.com/?daddr=Station+Sittard,+Stationsplein+2,+6131+AS+Sittard&dirflg=d&t=m" target="_blank">Open in Maps</Link></li>
                </ul>
            </details>

            <details>
                <summary>Plane</summary>
                When travelling by plane, look for flights with the following destinations.
                <ul>
                    <li>Maastricht Aachen Airport (MST)</li>
                    Closest airport, but also relatively small. You might not be able to book a flight to this location.
                    <li>Düsseldorf International Airport (DUS)</li>
                    Large international airport situated in Germany.
                    <li>Düsseldorf International Airport (DUS)</li>
                    Dutch airport bigger than Maastricht Aachen Airport.
                    <li>Amsterdam Airport Schiphol (AMS)</li>
                    Largest airport in the Netherlands, but requires a significant amount of travel after arrival. You might need to combine your flight with public transport.
                </ul>
            </details>
        </Text>
    )
}