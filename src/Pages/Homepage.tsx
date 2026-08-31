import Bookmark from "../component/Bookmark"
import Heading from "../component/Heading"


function Homepage() {
  return (
    <section className="px-4 py-6 pb-16 md:px-8 md:pt-8 flex flex-col gap-5 ">
      <Heading/>
      <Bookmark/>

    </section>
  )
}

export default Homepage