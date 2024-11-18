    import { motion } from 'framer-motion';
    import { useEffect, useState } from 'react';
    import { ApolloClient, createHttpLink, InMemoryCache, gql } from '@apollo/client';
    import { setContext } from '@apollo/client/link/context';

    function Projects() {
        const [pinnedItems, setPinnedItems] = useState([]);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);

        useEffect(() => {
            const fetchData = async () => {
                const httpLink = createHttpLink({
                    uri: 'https://api.github.com/graphql',
                });

                const authLink = setContext((_, { headers }) => ({
                    headers: {
                        ...headers,
                        authorization: `Bearer ${import.meta.env.VITE_GITHUB_ACCESS_TOKEN}`,
                    },
                }));

                const client = new ApolloClient({
                    link: authLink.concat(httpLink),
                    cache: new InMemoryCache(),
                });

                try {
                    const { data } = await client.query({
                        query: gql`
                            {
                                user(login: "Swastik-59") {
                                    pinnedItems(first: 6) {
                                        edges {
                                            node {
                                                ... on Repository {
                                                    name
                                                    id
                                                    url
                                                    stargazers {
                                                        totalCount
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        `,
                    });

                    const items = data.user.pinnedItems.edges.map((edge) => edge.node);
                    setPinnedItems(items);
                } catch (err) {
                    setError(err.message);
                } finally {
                    setLoading(false);
                }
            };

            fetchData();
        }, []);

        if (loading) return <div className="flex items-center justify-center h-screen text-2xl">Loading...</div>;
        if (error) return <div className="flex items-center justify-center h-screen text-2xl">Error: {error}</div>;

        return (
            <div id='project' className="bg-orange-100 min-h-screen py-10 px-4">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl font-bold text-center mb-8">Projects</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {pinnedItems.map((item) => (
                            <div
                                className="p-6 bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow"
                                key={item.id}
                            >
                                <h5 className="text-2xl font-bold mb-3 text-gray-800">{item.name}</h5>
                                <p className="text-yellow-700 font-medium mb-4">
                                    ⭐ {item.stargazers.totalCount} Stars
                                </p>
                                <motion.a
                                    target="_blank"
                                    whileTap={{ scale: 0.95 }}
                                    href={item.url}
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-orange-500 rounded-lg hover:bg-orange-600 transition-colors"
                                >
                                    See more
                                    <svg
                                        className="w-4 h-4 ml-2"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                                        />
                                    </svg>
                                </motion.a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    export default Projects;
