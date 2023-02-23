import { Banner } from "../../components/Banner";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";

export function Home(){
  return(
    <div>
      <Header />      
      <Banner />
      <Card />
    </div>
  )
}