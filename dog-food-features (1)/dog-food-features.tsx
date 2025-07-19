import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Leaf, Award, Truck, Stethoscope } from "lucide-react"
import Link from "next/link"

export default function Component() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Main heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          What makes us different
          <br />
          makes them stronger
        </h2>
      </div>

      {/* Features grid with central image */}
      <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-12">
        {/* Left column features */}
        <div className="space-y-8">
          <Card className="p-6 border-0 shadow-none">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Leaf className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Real Food</h3>
                <p className="text-gray-600">Wholesome recipes for dogs with real meat and veggies.</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-0 shadow-none">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Ingredient</h3>
                <p className="text-gray-600">Elevating pet care with unmatched safety and quality.</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Center image */}
        <div className="flex justify-center lg:order-none order-first group">
          <div className="relative w-[500px] h-[500px] rounded-full overflow-hidden shadow-2xl">
            <Image
              src="/raw-vs-kibble.png"
              alt="Dog bowl split showing raw food on one side and kibble on the other"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
              priority
              quality={100}
            />
          </div>
        </div>

        {/* Right column features */}
        <div className="space-y-8">
          <Card className="p-6 border-0 shadow-none">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Truck className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Made Fresh</h3>
                <p className="text-gray-600">We prioritize maintaining the integrity of whole foods and nutrition.</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-0 shadow-none">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Stethoscope className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Vet Developed</h3>
                <p className="text-gray-600">We raise the bar for dog nutrition, surpassing industry expectations.</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Call to action */}
      <div className="text-center">
        <Link href="/products" passHref>
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg mb-6"
          >
            {"Get your dog's healthy meal today!"}
          </Button>
        </Link>

        {/* Trust indicators */}
        <div className="group">
          <Image
            src="/trust-indicators-new.png"
            alt="30-day money back guarantee and various payment methods including PayPal, Visa, Mastercard, Apple Pay, and Google Pay"
            width={600}
            height={50}
            className="object-contain mx-auto group-hover:scale-105 transition-transform duration-300"
            priority
          />
        </div>
      </div>

      {/* Nutrition section */}
      <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Nutrition is the foundation for longer, healthier lives in dogs.
            </h2>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Invest in your dog's future with our scientifically formulated superfood-powered supplements. Give them
              the nutrition they deserve and watch them thrive with vitality, energy, and the joy of a longer, healthier
              life.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Key Points:</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-4xl font-bold text-orange-500 flex-shrink-0">97%</div>
                  <p className="text-gray-600 pt-2">
                    Dogs choose our dog food over leading brands because of its real functional ingredients and
                    delicious flavor.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-4xl font-bold text-orange-500 flex-shrink-0">84%</div>
                  <p className="text-gray-600 pt-2">
                    Our dog food provides superior nutrition and a patented probiotic for optimal nutrient absorption.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-4xl font-bold text-orange-500 flex-shrink-0">92%</div>
                  <p className="text-gray-600 pt-2">
                    Our dog food's high protein and fat digestibility contribute to ideal stool quality.
                  </p>
                </div>
              </div>
            </div>

            <Link href="/subscriptions" passHref>
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg"
              >
                Give your furry friend the gift of wholesome nutrition
              </Button>
            </Link>
          </div>

          {/* Right image */}
          <div className="flex justify-center lg:justify-end group">
            <div className="relative w-full max-w-lg">
              <Image
                src="/happy-dog-with-package.png"
                alt="Happy dog with Happy Dog Bites package"
                width={500}
                height={400}
                className="rounded-2xl object-cover w-full h-auto group-hover:scale-105 transition-transform duration-300"
                priority
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Gastrointestinal Health & Prebiotics Sections */}
      <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mt-16">
        {/* Gastrointestinal Health Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Left image */}
          <div className="flex justify-center lg:justify-start group">
            <div className="relative w-full max-w-lg h-[350px]">
              <Image
                src="/dogs-eating-new.png"
                alt="Two dogs eating from bowls with Happy Dog Bites package"
                fill
                className="rounded-2xl object-cover object-center group-hover:scale-105 transition-transform duration-300"
                priority
                quality={100}
              />
            </div>
          </div>

          {/* Right content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Improve overall gastrointestinal health for better nutrient absorption
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              Through rigorous scientific studies and consultations with veterinarians, we have created a breakthrough
              formula exclusively tailored to combat the health challenges prevalent in dogs. A staggering 91% of our
              customers have reported significant improvements in their dogs' health after incorporating our product
              into their diet.
            </p>
          </div>
        </div>

        {/* Prebiotics Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Prebiotics nourish the beneficial gut bacteria, supporting digestive health
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              Our dog food formula contains carefully selected prebiotics that work in harmony with the gut microbiota,
              providing the necessary nutrients for the growth and maintenance of beneficial bacteria, ultimately
              supporting digestive health.
            </p>
          </div>

          {/* Right image */}
          <div className="flex justify-center lg:justify-end group">
            <div className="relative w-full max-w-lg h-[350px]">
              <Image
                src="/kibble-closeup.png"
                alt="Close-up of dog kibble"
                fill
                className="rounded-2xl object-cover group-hover:scale-105 transition-transform duration-300"
                priority
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
