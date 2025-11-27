import React from 'react'
import MarketMainComp from '../../components/marketpage/market-main';

const Marketplace = () => {
    return (
            <MarketMainComp/>
    )
}

export default Marketplace;

export function generateMetadata() {
    return {
        title: "Facebook Marketplace | Web",
        description: "Discover, buy, and sell items locally on Web Facebook Marketplace. Find great deals in your community.",
    }
}