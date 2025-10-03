import { useState, useMemo } from "react";
import { Link } from "wouter";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/ui/seo-head";
import { newsArticles } from "@/lib/data";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

export default function News() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 12;

  // Dynamically generate categories from newsArticles
  const categories = useMemo(() => {
    const cats = new Set(newsArticles.map(article => article.category).filter(Boolean));
    return [{ value: "all", label: "All News" }, ...Array.from(cats).map(cat => ({ value: cat, label: cat }))];
  }, []);

  const filteredArticles = selectedCategory === "all"
    ? newsArticles
    : newsArticles.filter(article => article.category === selectedCategory);

  // Pagination logic
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);

  // Scroll Animation Refs
  const heroRef = useScrollAnimation({ delay: 200 });
  const newsGridRef = useStaggeredAnimation(currentArticles.length, 150);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Education':
        return 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400';
      case 'Water & Sanitation':
        return 'bg-cyan-100 dark:bg-cyan-900 text-cyan-600 dark:text-cyan-400';
      case "Women's Empowerment":
        return 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400';
      case 'Healthcare':
        return 'bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400';
      case 'Youth Development':
        return 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400';
      case 'Partnerships':
        return 'bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400';
      default:
        return 'bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <SEOHead
        title="News & Updates - MOLEX Foundation Africa"
        description="Stay informed about MOLEX Foundation Africa's latest achievements, program updates, and impact stories from across African communities."
        keywords="foundation news, african development news, community impact stories, program updates"
      />

      {/* Hero Section */}
      <section ref={heroRef} className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Latest News & Updates
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Stay informed about our latest achievements, upcoming projects, and impact stories
              from communities across Africa where we're making a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? "default" : "outline"}
                onClick={() => {
                  setSelectedCategory(category.value);
                  setCurrentPage(1);
                }}
                className="transition-all duration-300"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {currentArticles.length > 0 && (
        <section className="py-12 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Featured Story</h2>
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="grid lg:grid-cols-2 gap-0">
                  <img
                    src={currentArticles[0].image}
                    alt={currentArticles[0].title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <CardContent className="p-8 flex flex-col justify-center">
                    <div className="flex items-center mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(currentArticles[0].category)}`}>
                        {currentArticles[0].category}
                      </span>
                      <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm ml-auto">
                        <Calendar className="h-4 w-4 mr-1" />
                        {formatDate(currentArticles[0].date)}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {currentArticles[0].title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
                      {currentArticles[0].excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                        <User className="h-4 w-4 mr-1" />
                        {currentArticles[0].author}
                      </div>
                      <Button asChild>
                        <Link href={`/news/${currentArticles[0].id}`}>
                          Read More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {currentArticles.length > 1 && (
            <>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Recent Articles</h2>
              <div ref={newsGridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentArticles.slice(1).map((article) => (
                  <Card key={article.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover"
                    />
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(article.category)}`}>
                          {article.category}
                        </span>
                        <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{article.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{article.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                          <User className="h-4 w-4 mr-1" />
                          {article.author}
                        </div>
                        <Button variant="ghost" size="sm" asChild>
                          <Link href={`/news/${article.id}`}>
                            Read More <ArrowRight className="ml-1 h-3 w-3" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                No articles found for the selected category.
              </p>
            </div>
          )}

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  />
                </PaginationItem>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      onClick={() => setCurrentPage(page)}
                      isActive={currentPage === page}
                      className="cursor-pointer"
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Stay Informed</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest news, impact stories, and updates
            about our work across African communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button className="px-8">Subscribe</Button>
          </div>
        </div>
      </section>
    </>
  );
}
