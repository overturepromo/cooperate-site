import React from 'react';
import { Link } from 'react-router-dom'
import '../../styles/Csr.css'
import '../../styles/animate.css';

const CsrDifference = () => {
    return (
        <div className="csr-difference">
            <div className="container">
                <h1 class="csr-big">giving back</h1>
                <h2 className="csr-small">How We're Making a Difference</h2>
                <ul className="basic-csr">
                    <li>Overture gives employees a floating holiday for cultural holidays that aren’t paid days off, or for volunteer work.</li>
                    <li>Overture gives employees 2 weeks of paid paternity leave, 4-6 weeks of paid maternity leave, and 6 weeks of paid adoption leave.</li>    
                    <li>Overture supports A Safe Place, a local organization providing services for victims of domestic abuse and human trafficking, through participation in various events, fundraisers, drives, and other initiatives on an annual basis.</li>
                    <li>Overture employees participate annually in the Special Olympics Polar Plunge.</li>
                    <li>An Overture sales team curated and donated swag bags for a golf tournament benefiting PAWS, a local animal shelter.</li>
                    <li>Overture employees participated in the Walk for the Dogs Virtual 5K.</li>
                    <li>Overture employees raised funds for the Hispanic Alliance for Career Enhancement (HACE) in honor of Hispanic Heritage Month.</li>   
                    <li>Overture employees participate annually in the Ducky Derby, benefiting the Special Olympics.</li>
                    <li>Overture employees donated to the Wounded Warrior Project for Veteran’s Day and Overture matched this donation with one of equal value to the Intrepid Fallen Heroes Fund.</li> 
                </ul>

                <p className="basic-csr">Lending a hand during the pandemic:</p>    
                <ul className="basic-csr">
                    <li>Overture donated $3,565.04 to the Northern Illinois Food Bank.</li>
                    <li>Overture donated eco-friendly food containers to various organizations in need.</li>
                    <li>Overture employees volunteered as Crisis Counselors for Crisis Text Line.</li>
                    <li>Overture worked with a local clinic to ensure all employees had early access to vaccines. Our staff is 91% vaccinated</li>
                </ul>

                <p className="basic-csr">For more information about our diversity and inclusion initiative, go to our <Link to='/diversity' className="csr-link">DIAC page</Link>.</p>

                <p className="basic-csr">For more information about our efforts to minimize environmental impact, go to our <Link to='/sustainability' className="csr-link">Green Team page</Link>.</p> 

                <p className="basic-csr">For more information on Overture’s CSR initiatives, <a href="../../images/csr/CSR_Report.pdf" className="csr-link" download>download our Annual CSR Report</a>.</p>
            </div>
        </div>
    )
}

export default CsrDifference;