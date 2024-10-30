import device1 from "/device1.jpg"
import device2 from "/device2.png"
import device3 from "/device3.png"

import BackgroundPage from "../components/BackgroundPage/BackgroundPage";
import ButtonStore from "../components/ButtonStore/ButtonStore";

export default function Home() {
    return(
        <>
            <BackgroundPage>
                <div className="grid py-6">
                    <div className="text-center pb-8">
                        <h2 className=" text-textPrimary text-4xl">Your Company Apps</h2>
                        <p className="text-textSecondary pt-4">A melhor rede social de busca de filmes só ficou melhor.</p>
                    </div>

                <div className="flex justify-around">
                        <div>
                            <img className="rounded-3xl h-96 w-80 object-cover" src={device2} alt="" />
                            <p className="text-textPrimary font-bold text-center text-2xl pt-4">Iphone + Ipad</p>
                            <ButtonStore store="In the App Store"/>            
                        </div>

                        <div>
                            <img className="rounded-3xl h-96 w-80 object-cover" src={device1} alt="" />
                            <p className="text-textPrimary font-bold text-center text-2xl pt-4">Android</p>
                            <ButtonStore store="In the Play Store"/> 
                        </div>

                        <div>
                            <img className="rounded-3xl h-96 w-80 object-cover pb" src={device3} alt="" />
                            <p className="text-textPrimary font-bold text-center text-2xl pt-4">Apple Tv</p>
                            <ButtonStore store="In the App Store"/> 
                        </div>
                </div>
            </div>
            </BackgroundPage>
        </>
    )
}
