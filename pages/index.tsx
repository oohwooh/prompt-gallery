import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ImageSet from "../components/ImageSet"

export default function Index() {
  return (
    <div>
        <h1 className="text-3xl font-bold underline">
          Prompt Gallery
        </h1>
      <ImageSet image='rocket' prompt= 'rocket launch, stary night, digital art' author = 'Andrew Schmitz' link = 'https://twitter.com/Big_Schmitz'/>
      <ImageSet image='koala' prompt= 'seventeen parachuting koalas' author ='Justin Eldrige' link= 'https://eldridgejm.github.io/'/>
      <ImageSet image='rocket' prompt= 'Realistic 3d render of a happy, furry and cute baby red fox smiling with big eyes looking straight at you, Pixar style, 32k, full body shot with a light purple background' author='Nikolas Huebecker' link= 'https://twitter.com/nhuebecker?lang=en'/>
    </div>
    
  )
}