// import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link'


export default function Home() {
  return (

    <main>
      <div class="title">
        <h1>Sports Stats</h1>
      </div>
      <div class="content">
        <div class="select-league-title">Select A Sport Below</div>
        <div class="select-league-section">
          <div class="league-link">
            <Link href="/mlb">MLB</Link>
          </div>
          <div class="league-link">
            <Link href="/nfl">NFL</Link>
          </div>
          <div class="league-link">
            <Link href="/nba">NBA</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
