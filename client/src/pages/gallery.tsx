import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbox } from "@/components/ui/lightbox";
import { SEOHead } from "@/components/ui/seo-head";
import { galleryItems } from "@/lib/data";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<{ image: string; alt: string } | null>(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { value: "all", label: "All Photos" },
    { value: "education", label: "Education" },
    { value: "healthcare", label: "Healthcare" },
    { value: "agriculture", label: "Agriculture" },
    { value: "water", label: "Water & Sanitation" },
    { value: "empowerment", label: "Women's Empowerment" },
    { value: "community", label: "Community" }
  ];

  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const handleImageClick = (image: string, alt: string) => {
    setSelectedImage({ image, alt });
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <SEOHead
        title="Gallery - MOLEX Foundation Africa"
        description="Explore our photo gallery showcasing the impact of MOLEX Foundation Africa's work across African communities through education, healthcare, and development programs."
        keywords="photo gallery, african communities, foundation impact, development photos, community projects"
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our Impact in Pictures
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              See the transformative work we're doing across African communities through our comprehensive 
              photo gallery showcasing education, healthcare, and development programs.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            {filters.map((filter) => (
              <Button
                key={filter.value}
                variant={activeFilter === filter.value ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.value)}
                className="transition-all duration-300"
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="relative overflow-hidden rounded-lg cursor-pointer transform hover:scale-105 transition-all duration-300 group"
                onClick={() => handleImageClick(item.image, item.alt)}
              >
                <img
                  src={item.thumbnail}
                  alt={item.alt}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 text-2xl transition-opacity duration-300">
                    🔍
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <p className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                No images found for the selected category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Behind Every Photo, A Story</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Each image in our gallery represents real impact in the lives of African communities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-gray-600 dark:text-gray-300">Photos Captured</div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  Documenting our journey across Africa
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">200+</div>
                <div className="text-gray-600 dark:text-gray-300">Communities</div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  Featured in our gallery
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-gray-600 dark:text-gray-300">Success Stories</div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  Captured through photography
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">20+</div>
                <div className="text-gray-600 dark:text-gray-300">Countries</div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  Across the African continent
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Photography Ethics */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Ethical Photography</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Dignity & Respect</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Every photograph is taken with the full consent and dignity of our community members, 
                    ensuring their stories are told with respect and authenticity.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Community Ownership</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We work with local photographers and ensure communities have ownership of their images 
                    and stories, promoting local talent and perspectives.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Privacy Protection</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We maintain strict privacy standards, especially when photographing children and 
                    vulnerable populations, with explicit consent from guardians.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Children celebrating success"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <Lightbox
          isOpen={true}
          image={selectedImage.image}
          alt={selectedImage.alt}
          onClose={closeLightbox}
        />
      )}
    </>
  );
}
