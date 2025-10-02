import { useState } from "react";
import { useParams, Link } from "wouter";
import { Calendar, User, ArrowLeft, Share2, Clock, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SEOHead } from "@/components/ui/seo-head";
import { newsArticles } from "@/lib/data";
import { useToast } from "@/hooks/use-toast";

export default function NewsDetail() {
  const { id } = useParams();
  const { toast } = useToast();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const article = newsArticles.find(a => a.id === id);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Article Not Found</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">The article you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/news">Back to News</Link>
          </Button>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link Copied",
        description: "Article link has been copied to your clipboard.",
      });
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

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

  const estimatedReadTime = Math.ceil(article.content.split(' ').length / 200);

  // Get related articles (same category, excluding current article)
  const relatedArticles = newsArticles
    .filter(a => a.id !== article.id && a.category === article.category)
    .slice(0, 3);

  return (
    <>
      <SEOHead
        title={`${article.title} - MOLEX Foundation Africa`}
        description={article.excerpt}
        keywords={`${article.category}, foundation news, african development, ${article.title}`}
      />

      {/* Navigation */}
      <section className="py-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="ghost" asChild className="text-primary hover:text-primary/80">
            <Link href="/news">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to News
            </Link>
          </Button>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(article.category)}`}>
              {article.category}
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {article.title}
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            {article.excerpt}
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center border-b border-gray-200 dark:border-gray-700 pb-6 mb-8">
            <div className="flex items-center space-x-6">
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <User className="h-5 w-5 mr-2" />
                <span className="font-medium">{article.author}</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <Calendar className="h-5 w-5 mr-2" />
                <span>{formatDate(article.date)}</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <Clock className="h-5 w-5 mr-2" />
                <span>{estimatedReadTime} min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Image */}
      <section className="bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-xl shadow-lg mb-12"
          />
        </div>
      </section>

      {/* Article Content with Sidebar */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div
                className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </div>

            {/* Sidebar with Related Articles */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Related Articles</h3>
                
                {relatedArticles.length > 0 ? (
                  <div className="space-y-6">
                    {relatedArticles.map((relatedArticle) => (
                      <Card key={relatedArticle.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <Link href={`/news/${relatedArticle.id}`}>
                          <img
                            src={relatedArticle.image}
                            alt={relatedArticle.title}
                            className="w-full h-32 object-cover"
                          />
                          <CardContent className="p-4">
                            <div className="flex items-center mb-2">
                              <span className={`px-2 py-1 rounded text-xs font-semibold ${getCategoryColor(relatedArticle.category)}`}>
                                {relatedArticle.category}
                              </span>
                            </div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm line-clamp-2">
                              {relatedArticle.title}
                            </h4>
                            <p className="text-gray-600 dark:text-gray-300 text-xs line-clamp-2 mb-2">
                              {relatedArticle.excerpt}
                            </p>
                            <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                              <Calendar className="h-3 w-3 mr-1" />
                              <span>{formatDate(relatedArticle.date)}</span>
                            </div>
                          </CardContent>
                        </Link>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500 dark:text-gray-400">No related articles found.</p>
                    <Button variant="outline" className="mt-4" asChild>
                      <Link href="/news">Browse All News</Link>
                    </Button>
                  </div>
                )}

                {/* Share Section in Sidebar */}
                <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Share this article</h4>
                  <Button onClick={handleShare} className="w-full">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share Article
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      {article.gallery && article.gallery.length > 0 && (
        <section className="py-12 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">More Photos</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {article.gallery.map((image, index) => (
                <div
                  key={index}
                  className="relative group cursor-pointer overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-700 aspect-square"
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image}
                    alt={`${article.title} - Image ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl max-h-full p-4">
            <Button
              variant="outline"
              size="sm"
              className="absolute top-6 right-6 z-10 bg-white text-black hover:bg-gray-100"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-4 w-4" />
            </Button>
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-primary text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Get Involved with Our Work</h3>
              <p className="text-lg mb-6 opacity-90">
                Want to be part of stories like this? Join us in making a difference across African communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" className="bg-white text-primary hover:bg-gray-100" asChild>
                  <Link href="/join-us">Join Our Mission</Link>
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                  <Link href="/programs">View Our Programs</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Related Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.filter(a => a.id !== article.id && a.category === article.category).slice(0, 3).map((relatedArticle) => (
              <Card key={relatedArticle.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img
                  src={relatedArticle.image}
                  alt={relatedArticle.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${getCategoryColor(relatedArticle.category)}`}>
                      {relatedArticle.category}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      {new Date(relatedArticle.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">{relatedArticle.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">{relatedArticle.excerpt}</p>
                  <Button variant="ghost" size="sm" asChild className="p-0">
                    <Link href={`/news/${relatedArticle.id}`} className="text-primary hover:text-primary/80">
                      Read More →
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
