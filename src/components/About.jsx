import gsap from 'gsap';
import { SplitText} from 'gsap/all'
import { useGSAP } from '@gsap/react'
import { featureLists, profileLists } from '../../constants/index.js'

const About = () => {
 useGSAP(() => {
	const titleSplit = SplitText.create('#about h2', {
	 type: 'words'
	})
	
	const scrollTimeline = gsap.timeline({
	 scrollTrigger: {
		trigger: '#about',
		start: 'top center'
	 }
	})
	
	scrollTimeline
	 .from(titleSplit.words, {
		opacity: 0, duration: 1, yPercent: 100, ease: 'expo.out', stagger: 0.02
	})
	 .from('.top-grid div, .bottom-grid div', {
		opacity: 0, duration: 1, ease: 'power1.inOut', stagger: 0.04,
	}, '-=0.5')
 })
 
 return (
	<div id="about">
	 <div className="mb-16 md:px-0 px-5">
		<div className="content">
		 <div className="md:col-span-8">
			<p className="badge">Best Cocktails</p>
			<h2>
			 Where every detail matters <span className="text-white">-</span>
				from muddle to garnish
			</h2>
		 </div>
		 
		 <div className="sub-content">
			<p>
			 Every cocktail we serve is a reflection of our obsession with detail — from the first muddle to the final garnish. That care is what turns a simple drink into something truly memorable.
			</p>
			
			<div className="rating-block">
			 <div className="rating-info">
				<div className="rating-stars" aria-hidden="true">
				 {Array.from({ length: 5 }).map((_, index) => (
					<img key={index} src="/images/star-icon.png" alt="" />
				 ))}
				</div>
				<p className="rating-score">
				 <span>4.5</span>/5
				</p>
				<p className="rating-customers">
				 More than +12000 customers
				</p>
			 </div>

			 <div className="rating-divider" aria-hidden="true" />
			 

			 <div className="profile-stack">
				<div className="noisy" />
				<div className="profile-stack-avatars">
				 {profileLists.map((profile) => (
					<img
					 key={profile.imgPath}
					 src={profile.imgPath}
					 alt=""
					/>
				 ))}
				 <span className="profile-stack-count">+12k</span>
				</div>
			 </div>
			</div>
		 </div>
		</div>
	 </div>
	 
	 <div className="top-grid">
		<div className="md:col-span-3">
		 <div className="noisy" />
		 <img src="/images/abt1.png" alt="grid-img-1" />
		</div>

		<div className="feature-card-cell md:col-span-3">
			<div className="noisy" />
				<div className="feature-card">
					<h3>Crafted to Impress</h3>
					<div className="feature-card-divider" aria-hidden="true" />
					<ul className="feature-card-points">
					{featureLists.map((point) => (
						<li key={point}>
						<img src="/images/check-icon.png" alt="" aria-hidden="true" />
						<p>{point}</p>
						</li>
					))}
					</ul>
				</div>
		</div>
		
		<div className="md:col-span-6">
		 <div className="noisy" />
		 <img src="/images/abt2.png" alt="grid-img-2" />
		</div>
	 </div>
	 
	 <div className="bottom-grid">
		<div className="md:col-span-8">
		 <div  className="noisy" />
		 <img src="/images/abt3.png" alt="grid-img-3" />
		</div>
		
		<div className="md:col-span-4">
		 <div  className="noisy" />
		 <img src="/images/abt4.png" alt="grid-img-4" />
		</div>
	 </div>
	 
	</div>
 )
}
export default About