'use client';

import { useEffect, useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch } from 'react-icons/fa';
import { Search, Filter, Loader2 } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

// Language colors mapping
const languageColors = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Python: '#3572A5',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Dart: '#00B4AB',
  Java: '#b07219',
  'Jupyter Notebook': '#DA5B0B',
  C: '#555555',
  'C++': '#f34b7d',
  'C#': '#178600',
  Ruby: '#701516',
  Go: '#00ADD8',
  Rust: '#dea584',
  PHP: '#4F5D95',
  Swift: '#ffac45',
  Kotlin: '#A97BFF',
  Vue: '#41b883',
  Shell: '#89e051',
};

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [filteredRepos, setFilteredRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('All');
  const [languages, setLanguages] = useState(['All']);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          'https://api.github.com/users/Aatiqa04/repos?sort=updated&per_page=100'
        );

        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }

        const data = await response.json();

        // Filter out forked repos and sort by stars/updated
        const ownRepos = data
          .filter((repo) => !repo.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count || new Date(b.updated_at) - new Date(a.updated_at));

        setRepos(ownRepos);
        setFilteredRepos(ownRepos);

        // Extract unique languages
        const uniqueLanguages = ['All', ...new Set(ownRepos.map((repo) => repo.language).filter(Boolean))];
        setLanguages(uniqueLanguages);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  // Filter repos based on search and language
  useEffect(() => {
    let filtered = repos;

    if (searchTerm) {
      filtered = filtered.filter(
        (repo) =>
          repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (repo.description && repo.description.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedLanguage !== 'All') {
      filtered = filtered.filter((repo) => repo.language === selectedLanguage);
    }

    setFilteredRepos(filtered);
  }, [searchTerm, selectedLanguage, repos]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">My Projects</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore my GitHub repositories. These projects showcase my skills in various technologies
              and my passion for building meaningful applications.
            </p>
          </div>
        </ScrollReveal>

        {/* Search and Filter */}
        <ScrollReveal delay={100}>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:border-purple-500 transition-colors"
              />
            </div>

            {/* Language Filter */}
            <div className="relative">
              <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="pl-12 pr-8 py-3 bg-gray-900/50 border border-gray-800 rounded-xl text-white appearance-none cursor-pointer focus:border-purple-500 transition-colors min-w-[150px]"
              >
                {languages.map((lang) => (
                  <option key={lang} value={lang} className="bg-gray-900">
                    {lang}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </ScrollReveal>

        {/* Stats */}
        <ScrollReveal delay={150}>
          <div className="flex flex-wrap gap-4 mb-8 justify-center sm:justify-start">
            <div className="px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-lg">
              <span className="text-purple-400 font-bold">{repos.length}</span>
              <span className="text-gray-400 ml-2">Total Repos</span>
            </div>
            <div className="px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-lg">
              <span className="text-purple-400 font-bold">{filteredRepos.length}</span>
              <span className="text-gray-400 ml-2">Showing</span>
            </div>
            <div className="px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-lg">
              <span className="text-purple-400 font-bold">
                {repos.reduce((acc, repo) => acc + repo.stargazers_count, 0)}
              </span>
              <span className="text-gray-400 ml-2">Total Stars</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-12 h-12 text-purple-500 animate-spin mb-4" />
            <p className="text-gray-400">Fetching repositories from GitHub...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-20">
            <div className="inline-block p-4 bg-red-500/10 border border-red-500/30 rounded-xl mb-4">
              <p className="text-red-400">{error}</p>
            </div>
            <p className="text-gray-400">Please try again later or visit my GitHub directly.</p>
            <a
              href="https://github.com/Aatiqa04"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-purple-400 hover:text-purple-300 transition-colors"
            >
              <FaGithub size={20} />
              View GitHub Profile
            </a>
          </div>
        )}

        {/* No Results */}
        {!loading && !error && filteredRepos.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 mb-4">No projects found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedLanguage('All');
              }}
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Projects Grid */}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRepos.map((repo, index) => (
              <ScrollReveal key={repo.id} delay={index * 50}>
                <div className="group h-full bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-white truncate group-hover:text-purple-400 transition-colors">
                        {repo.name}
                      </h3>
                      {repo.language && (
                        <div className="flex items-center gap-2 mt-1">
                          <span
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: languageColors[repo.language] || '#8b8b8b' }}
                          />
                          <span className="text-sm text-gray-500">{repo.language}</span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-2 ml-2">
                      {repo.stargazers_count > 0 && (
                        <span className="flex items-center gap-1 text-yellow-500 text-sm">
                          <FaStar size={12} />
                          {repo.stargazers_count}
                        </span>
                      )}
                      {repo.forks_count > 0 && (
                        <span className="flex items-center gap-1 text-gray-500 text-sm">
                          <FaCodeBranch size={12} />
                          {repo.forks_count}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4 flex-1 line-clamp-3">
                    {repo.description || 'No description available.'}
                  </p>

                  {/* Topics */}
                  {repo.topics && repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {repo.topics.slice(0, 4).map((topic) => (
                        <span
                          key={topic}
                          className="px-2 py-1 text-xs bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20"
                        >
                          {topic}
                        </span>
                      ))}
                      {repo.topics.length > 4 && (
                        <span className="px-2 py-1 text-xs text-gray-500">
                          +{repo.topics.length - 4} more
                        </span>
                      )}
                    </div>
                  )}

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                    <span className="text-xs text-gray-500">
                      Updated {formatDate(repo.updated_at)}
                    </span>
                    <div className="flex items-center gap-3">
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-purple-400 transition-colors"
                        aria-label="View on GitHub"
                      >
                        <FaGithub size={18} />
                      </a>
                      {repo.homepage && (
                        <a
                          href={repo.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-purple-400 transition-colors"
                          aria-label="View live demo"
                        >
                          <FaExternalLinkAlt size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}

        {/* GitHub CTA */}
        <ScrollReveal delay={200}>
          <div className="mt-16 text-center">
            <a
              href="https://github.com/Aatiqa04"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300 group"
            >
              <FaGithub size={24} className="group-hover:scale-110 transition-transform" />
              <span className="text-white group-hover:text-purple-400 transition-colors">
                View All on GitHub
              </span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
