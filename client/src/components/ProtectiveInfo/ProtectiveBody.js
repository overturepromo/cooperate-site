import React from 'react';
import '../../styles/Ppe.css'

const ProtectiveBody = () => {
    return (
        <div className="protective-history">
            <div className="container">
                <div className="ppe-spacing">
                    <p className="ppe-basic">Why should you read our advice? Overture is one of the largest swag agencies in the US, with over 20 years of experience. Because of our long-standing relationships with factories overseas, we were able to successfully pivot to sourcing PPE for our customers. Since March, we’ve distributed over 50 million pieces of PPE.</p>
                </div>
            </div>
            <div className="container ppe-history">
                <h4 className="ppe-title-blue">PPE: A Brief History</h4>
                <p className="ppe-basic">At the start of the pandemic, there was a global PPE shortage. Today, manufacturing has largely caught up to demand, making it easier to procure most PPE in a reasonable timeframe from reliable suppliers. More supply has meant a corresponding drop in prices, and improved timing, with most items shipping within days or weeks. While a majority of PPE is still manufactured in Southeast Asia, there has been an increase in domestic supply. There are still incidents of <a target="blank" class="ppe-link" href="https://www.latimes.com/california/story/2020-04-11/coronavirus-seiu-masks-fraud-fbi">scams</a> and <a target="blank" class="ppe-link" href="https://www.nytimes.com/2020/08/04/health/fda-hand-sanitizer-recall.html">dangerous</a> products, so it’s essential that you purchase from trusted sources.</p>
            </div>
            <div className="container ppe-esentials">
                <h4 className="ppe-title-green">PPE Essentials</h4>
                <p className="ppe-basic"><strong>Masks and face shields</strong> have seen the largest pricing decrease. Your best options include: </p>
                <ul className="ppe-ul">
                    <li>KN95s and N95s, both medical grade masks certified in China and the US, respectively, largely reserved for front-line workers</li>
                    <li>Disposable 3-ply masks, lightweight and preferred for prolonged use</li>
                    <li>Cloth masks, with options for material, thickness, color and branding</li>
                </ul>
                <p className="ppe-basic">Recent testing of popular mask styles by researchers at Duke University has given us new insights about which are the most effective at blocking respiratory droplets to help curb virus spread. Fitted N95s performed the best, and both 3-ply surgical masks and cotton masks also did well. Folded bandanas and knitted masks performed poorly in the tests. Fleece neck gaiters were the least effective type of face covering</p>
                <p className="ppe-basic"><strong>Note:</strong> <i>We learned the hard way (after trying on many uncomfortable cloth masks) that finding the perfect mask can be a challenge, so always request a sample to try before you order</i></p>
                <p className="ppe-basic">Pricing and availability of <strong>hand sanitizers</strong> have improved, due to the increased number of domestic manufacturers, but the availability of <strong>surface wipes</strong> remains depressed. Here’s what you need to know:</p>
                <ul className="ppe-ul">
                    <li>Hand sanitizers, antiseptic washes and antibacterial soaps are regulated by the FDA. The CDC recommends hand sanitizer with alcohol concentrations between 65 and 90 percent. The FDA warned against some hand sanitizer produced in Mexico because of the potential presence of methanol, which can be toxic when absorbed through the skin.</li>
                    <li>Surface wipes are trickier. Sanitizing or disinfecting surface wipes are regulated by the EPA. List N: Disinfectants for Use Against SARS-CoV-2 (COVID-19) shows products that the EPA expects to be effective to kill COVID-19 on hard surfaces. You may see off-brand wipes with the same ingredients as those on List N, but they cannot be labeled as sanitizing or disinfecting surface wipes if they are not approved by the EPA.  Any other surface wipe that is not on the EPA’s List N cannot be marketed as being effective against COVID-19 (even though they may be).</li>
                </ul>
                <p className="ppe-basic">Pricing and availability of <strong>gowns, gloves and boot covers</strong> has slightly improved, with most manufactured in Southeast Asia. It’s important to choose the right type, depending on the use case. OSHA has guidelines that correlate use case with proper corresponding PPE. </p>
            </div>
            <div className="container ppe-stock">
                <h4 className="ppe-title-orange">Should I stock up?</h4>
                <p className="ppe-basic">While there’s no need to become a hoarder and stockpile PPE like it’s toilet paper, it is important to get ahead of your organization’s needs. There are still several factors (such as the continued increase of COVID cases worldwide, tensions between the US and China, tightening of compliance regulations for manufacturers, etc.) that can put additional pressure on the supply chain, thus potentially increasing costs and turnaround times. Our customers are ordering supply through the end of 2020, with some stocking up for the first quarter of 2021. </p>
            </div>
        </div>
    )
}


export default ProtectiveBody;