import React, { useEffect, useState } from 'react';
import "./ShowPage.css";
import { Link } from 'react-router-dom';
import pic from './../assets/vendor-paper-logo.png';
import axios from 'axios';
import NavBar from '../components/NavBar';
import CategoryList from '../components/CategoryList';
import { Button } from 'bootstrap';
import ProductTile from '../components/ProductTile';
import c_logo from "../assets/c_logo.png";
import c_bg from "../assets/c_bg.png";
import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Carousel from '../components/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const api = axios.create({
    baseURL: 'http://localhost:8000',
});


export default function ShowPage() {
    const daysOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    const [companyInfo, setCompanyInfo] = useState({
        id: '',
        name: 'Company name',
        address: 'Company address',
        phone: '++977 9809211878',
        email: 'coolarshad96@gmailcom',
        website: 'http://noticevalley.com',
        fax: '+977 40023',
        description: '',
        logo: '',
        location: '',
        tags: '',
        images: [],
        categories: [],
        time: [],
        products: []
    });

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get('/company/companyproduct/20/');
                const data = response.data;
                setCompanyInfo(data);
                console.log(data)
            } catch (error) {
                // Handle errors if necessary
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const getProductImage = (product) => {
        const img = product.product_images?.[0];
        if (img) {
            return `http://localhost:8000${img.image}`
        }
        return pic;
    }

    // const items = [{
    //     "Telecommunications and Computing": ['Computing and Technology',
    //         'Data Storage and Management',
    //         'Internet and E-Commerce',
    //         'Telecommunications and Networks']
    // }, {
    //     "Pharmaceuticals": ['Anesthetic Drugs',
    //         'Animal Pharmaceuticals',
    //         'Antibiotics',
    //         'Biopharmaceuticals',
    //         'Clinical Trials',
    //         'Drug Delivery',
    //         'Drug Discovery',
    //         'Drugs by Therapeutic Area',
    //         'Generic Drugs',
    //         'Oncology Drugs',
    //         'Over the Counter (OTC) Drugs',
    //         'Pharmaceutical Intermediates',
    //         'Pharmaceutical Manufacturing',
    //         'Pharmacoeconomics',
    //         'Vitamins and Dietary Supplements']
    // }]
    const items =  ['Anesthetic Drugs',
            'Animl Pharmaceuticals',
            'Antibiotics',
            'Biopharmaceuticals',
            
            'Drug Delivery',
            'Drug Discovery',
            'Drugs by Therapeutic Area',
            'Generic Drugs',
            'Oncology Drugs',
            'Over the Counter (OTC) Drugs',
            'Pharmaceutical Intermediates',
            'Pharmaceutical Manufacturing',
            'Pharmacoeconomics',
            'Drug Delivery',
            'Drug Discovery',
            'Drugs by Therapeutic Area',
            'Generic Drugs',
            'Oncology Drugs',
            'Vitamins and Dietary Supplements']


    // Get all accordion items
    const accordionItems = document.querySelectorAll('.product-type-container');

    // Add click event listeners to each header
    accordionItems.forEach((item) => {
        const header = item.querySelector('.product-type-header');
        const content = item.querySelector('.product-type-content');

        header.addEventListener('click', () => {
            if (content.style.height === '250px') {
                content.style.height = '500px';
            } else {
                content.style.height = '250px';
            }
        });
    });

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
      };
    return (
        <React.Fragment>
            <NavBar />
            <React.Fragment class="min-h-full">
            <div class="w-screen h-40 flex justify-center items-center bg-cover bg-center" style={{backgroundImage: `url(${c_bg})`}}>
                    <img class="h-30 w-48 " src={c_logo} alt="Description of the image" />
                    <div class="flex flex-col justify-start items-start mr-5 ml-5">
                        <div class="text-2xl font-bold">Shenzhen Poofect Technology Co., Ltd.</div>
                        <div class="flex">
                            <div class="font-bold  mr-5 text-sky-700">Custom manufacturer</div>
                            <div class="font-bold  mr-5">12 years</div>
                            <div class="font-bold  mr-5">Guangdong, China</div>
                        </div>
                        <div> Main categories: Smart Watch/Earphone/Earbuds</div>
                        <div class="flex">
                            <div class="wi-fit h-fit bg-slate-200 p-2 rounded mr-1"><span class="font-bold">Ranked #1</span> most popular in Smart Watches</div>
                            <div class="wi-fit h-fit bg-slate-200 p-2 rounded mr-1">Design-based customization</div>
                            <div class="wi-fit h-fit bg-slate-200 p-2 rounded mr-1">Competitive OEM factory</div>
                        </div>
                    </div>
                    <div>
                        <div class="w-auto m-1 mb-5 h-fit pt-1 pb-1 pr-4 pl-4 rounded text-white bg-red-300">Verified by SGS Group</div>
                        <div class="w-auto m-1 h-fit pt-1 pb-1 pr-4 pl-4 bg-orange-500 rounded-full text-white">Contact supplier</div>
                        <div class="w-auto m-1 h-fit pt-1 pb-1 pr-4 pl-4 bg-[hsla(0,0%,100%,.5)] rounded-full text-current border-inherit border-2">Chat now</div>
                    </div>
                </div>
                <div class="w-screen h-10 bg-slate-600 flex justify-center items-center">
                    <div class="font-medium text-white p-1 mr-5"><a href='' class="text-white no-underline">Home</a></div>
                    <div class="font-medium text-white p-1 mr-5"><a href='' class="text-white no-underline">Products</a></div>
                    <div class="font-medium text-white p-1 mr-5"><a href='' class="text-white no-underline">Company Overview</a></div>
                    <div class="font-medium text-white p-1 mr-5"><a href='' class="text-white no-underline">Contact</a></div>
                    <div class="font-medium text-white p-1 mr-5"><a href='' class="text-white no-underline">Company Rating & Reviews</a></div>
                    <div class="font-medium text-white p-1 mr-5"><a href='' class="text-white no-underline">Offers</a></div>
                </div>
                <div class="w-screen h-[70vh] bg-gray-400">
                    <Slider {...settings}>
                        <div class="w-auto h-auto">
                            <img class="w-screen h-[67vh]" src={slider1} />
                        </div>
                        <div class="w-auto h-auto">
                            <img class="w-screen h-[67vh]" src={slider2} />
                        </div>
                        
                    </Slider>
                </div>
                <div class="w-screen bg-sky-200 p-6">
                    <p className='text-2xl font-medium'>Select By Categories</p>
                    <div class="h-48 flex flex-col flex-wrap justify-start items-center">
                        {items.map((item, index) => (
                            <div key={index}>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
                <div class="w-screen h-96 ">
                    <div class="w-auto h-44  m-5 p-5">
                        <p>Company contact information</p>
                        <div>
                            <img src={c_logo} className='h-20 w-20 rounded-full border-current'/>
                            <p>Ms. Sammi Luo</p>
                            <div>
                                <p>Company phone: 999999999999</p>
                                <p>Company Fax: 999999999999</p>
                                <p>Company Email: 999999999999</p>
                                <p>Company Address: 999999999999</p>
                            </div>
                        </div>
                    </div>
                    <div class="w-auto h-44  m-5 p-5"></div>
                </div>
                <div class="w-auto h-96 bg-amber-200 flex justify-center items-center">
                    <div className='p-10'>
                        <p className='font-bold text-3xl'>Performance</p>
                        <p><span className='font-bold text-3xl'>4.4/5</span> <span className='font-bold'>Satisfied</span></p>
                        <p>3604 <span className='font-bold'>reviews</span></p>
                        <div>
                            <div><FontAwesomeIcon icon={faCircleCheck} /><span class="ml-2">Minor customization</span></div>
                            <div><FontAwesomeIcon icon={faCircleCheck} /><span class="ml-2">Full customization</span></div>
                            <div><FontAwesomeIcon icon={faCircleCheck} /><span class="ml-2">Raw-material traceability identification</span></div>
                            <div><FontAwesomeIcon icon={faCircleCheck} /><span class="ml-2">Finished product inspection</span></div>
                            <div><FontAwesomeIcon icon={faCircleCheck} /><span class="ml-2">CE</span></div>
                        </div>
                    </div>
                    <div className='p-5'>
                    <iframe className='w-[600px] h-[300px]' src="https://www.youtube.com/embed/RIv9SiI2bSQ?list=RDOPazrdwYAm0" title="Dil Ka Telephone 2.0 - Full Video | Dream Girl 2 | Ayushmann, Ananya | Meet Bros,Jonita,Jubin,Kumaar" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
                <div class="w-screen h-96 bg-lime-200"></div>
                <div class="w-screen h-96 bg-teal-200"></div>
            </React.Fragment>
        </React.Fragment>
    )
}