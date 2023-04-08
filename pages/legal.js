import Text from '/components/text.js';
import Link from 'next/link';

export default function Legal() {
  return (
    <Text>
      <h1>Legal</h1>
      <p>Last updated April 7, 2023.</p>
      <p>The terms of service and privacy policy may change without further notice. For clarity, this website is represented as its own entity referred to as "we", "us" or "our".</p>

      <h2>Terms of Service</h2>
      <p>The website's material and code is provided to you "as-is". Users may not abuse our site by sending harmful or insulting content, or attempting to disrupt it through means such as DDOS attacks or spam.</p>

      <h2>Privacy Policy</h2>
      <p>We aim to respect the privacy of our site's visitors and keep our privacy policy as short and concise as possible. The main points are as follows.</p>
      <ul>
        <li>Under normal circumstances, we do not collect personal information about our users unless the user deliberately sends us this information, such as through a contact form.</li>
        <li>We may collect anonymous data, which is retained for an indefinite amount of time.</li>
        <li>In the event that we do have personal information on a certain individual, they can exercise their right to erasure by contacting us.</li>
      </ul>

      <p>For additional specifics, please continue reading. Should there be a need to contact us, visit our <Link href="/contact">contact page</Link>.</p>

      <h3>Analytics</h3>
      <p>At any point, we may decide to use analytics software to collect information. This information may be used to determine how the website is performing, or to protect us from malicious actors. Analytics software that is currently in use will be listed below.</p>

      <h4>Vercel</h4>
      <p>We use Vercel to collect information in the form of "data points". The recording of data points is anonymous and no information is stored or collected that would allow us or Vercel to indentify a user. The below information is contained within a data point.</p>

      <table>
        <thead>
          <tr>
            <th>Collected Value</th>
            <th>Example Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Page</td>
            <td>/posts/[slug]</td>
          </tr>
          <tr>
            <td>URL</td>
            <td>/posts/welcome</td>
          </tr>
          <tr>
            <td>Network Speed</td>
            <td>4g (or slow-2g, 2g, 3g)</td>
          </tr>
          <tr>
            <td>Browser</td>
            <td>Chrome 86 (Blink)</td>
          </tr>
          <tr>
            <td>Device Type</td>
            <td>Mobile (or Desktop/Tablet)</td>
          </tr>
          <tr>
            <td>Device OS</td>
            <td>Android 10</td>
          </tr>
          <tr>
            <td>Country</td>
            <td>US</td>
          </tr>
          <tr>
            <td>Web Vital</td>
            <td>FCP 1.0s</td>
          </tr>
          <tr>
            <td>Server-Received Event Time</td>
            <td>2020-10-29 09:06:30</td>
          </tr>
        </tbody>
      </table>

      <p>As the data cannot be used to identify any particular person, we are unable to process requests regarding the deletion of such data. More information regarding how Vercel handles data can be found in their <Link href="https://vercel.com/legal/privacy-policy">privacy policy</Link>. Please note that not everything will apply to the analytics component of their service.</p>

      <h3>Forms</h3>
      <p>We collect the information you send using our contact forms to facillate communication. The data we receive is the data you entered into the form, which may include names or e-mail addresses. We may use a third-party to deliver the data you enter in the form to us. If such a third party is used, we will provide a notice and a link to their third-party's privacy policy with the form.</p>
      <p>Please note that our privacy policy policy only applies to communication that occurs through the website. Communication that occurs outside of the website is subject to the privacy policy of the communication platform in use.</p>
    </Text>
  )
}