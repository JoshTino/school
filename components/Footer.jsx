import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer(){

return(

<footer className="bg-maroon text-white py-10">

<div className="max-w-6xl mx-auto px-5 grid md:grid-cols-3 gap-8">

<div>
<h3 className="font-bold text-lg">
Treasure Field College
</h3>
<p>Jos, Plateau State</p>
</div>

<div>
{/*<h4 className="font-semibold mb-2">Quick Links</h4>*/}
<ul className="space-y-1">
<a href="#gallery"><li>Gallery</li></a>
<a href="#academics"><li>Academics</li></a>
<a href="#facilities"><li>Facilities</li></a>
</ul>
</div>

<div className="flex justify-around gap-4">
<a href="https://facebook.com/treasurefielscollegejos/"><Facebook/></a>
<a href="https://www.instagram.com/treasurefieldcollegejos"><Instagram/></a>
<Twitter/>
</div>

</div>

<p className="text-center mt-6 text-sm">
© {new Date().getFullYear()} Treasure Field College
</p>

</footer>

)

}