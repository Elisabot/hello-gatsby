import React from "react"
import Header from "../components/header"

export default function Home() {
  return (
    <div style={{ color: `purple`, fontSize: `72px` }}>
      <Header headerText={`Here's Gatsby`} />
      <img src="https://source.unsplash.com/random/400x200" alt="random photo from unsplash" />
    </div>
    )
}
