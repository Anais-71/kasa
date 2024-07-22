import React, { useEffect, useState } from 'react'
import { Navigate, redirect, useParams } from 'react-router-dom'
import Dropdown from '../../components/dropdown/Dropdown'
import Gallery from '../../components/gallery/Gallery'
import { fetchData } from '../../utils/fetch'
import { FaStar } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

//CSS
import './housing.css'

function Housing() {
  const [data, setData] = useState([])
  const { id } = useParams()
  let navigate = useNavigate()

  const getData = async () => {
    const dataJson = await fetchData()
    const dataItem = dataJson.find((item) => item.id === id)
    setData(dataItem ? [dataItem] : [])
    console.log(dataItem)
    if (!dataItem) {
      console.log('if', dataItem)
      navigate('/404')
    }
  }

  useEffect(() => {
    getData()
  }, [id])

  return (
    <div className="housing">
      {data.map((item, index) => (
        <div key={index}>
          <div className="housing__banner">
            <Gallery images={item.pictures} />
          </div>
          <div className="housing__info">
            <div className="housing__info--title">{item.title}</div>
            <div className="housing__info--location">{item.location}</div>
          </div>
          <div className="housing__host">
            <div className="housing__host--name">
              {item.host && item.host.name}
            </div>
            <img
              className="housing__host--picture"
              src={item.host && item.host.picture}
              alt={item.host && item.host.name}
            />
          </div>
          <div className="housing__tags">
            {item.tags &&
              item.tags.map((tag, i) => (
                <div key={i} className="housing__tags--tag">
                  {tag}
                </div>
              ))}
          </div>
          <div className="housing__rating">
            {[...Array(5)].map((star, i) => {
              const ratingValue = i + 1
              return (
                <FaStar
                  key={i}
                  color={ratingValue <= item.rating ? 'red' : '#E3E3E3'}
                  size={24}
                />
              )
            })}
          </div>
          <div className="housing__dropdowns">
            <Dropdown
              title="Description"
              items={item.description ? [item.description] : []}
            />
            <Dropdown title="Équipements" items={item.equipments || []} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Housing
