import React from 'react'

const Insights = () => {
    return (
        <div className='mx-10 w-[980px] bg-white rounded-lg'>Insights
            - widget. Try modifying the widget values to bring the widget design as close as the one in the Figma design.
            - Use Coingecko’s `/search/trending` API to fetch the list of top 3 trending coins to be displayed in the “Trending Coins (24h)” component on the right. ([Sample API Response](https://www.notion.so/Sample-API-Response-search-trending-e85623b447e94deb9da67d3b112b8761?pvs=21))
            - For the “You May Also Like” section, show the logo, symbol, price, price change and price graph of the “Trending Coins” that we fetched from the previous API.
            - Hint: For the graph, there is a `sparkline` property in the “Trending Coins” API response which gives the graph image for each coin.
            - The row should be a horizontally scrollable carousel.
            - You can repeat the same row twice, i.e., use the same data for the “Trending Coins” carousel below the “You May Also Like” carousel.
            - Ensure that the UI is responsive according to the Figma design.
            - The components that only contain text/images and are not dependent on any of the above mentioned APIs or integrations, please use any placeholder text/images according to the design.
            - Host your code on GitHub.
            - Deploy your code using tools like Netlify or Vercel.

            ## Optional Task:

            - Make the token to be shown dynamic using the URL. For example, `/bitcoin` should show
        </div>
    )
}

export default Insights