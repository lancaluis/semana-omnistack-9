import React, { useState, useMemo } from 'react';
import api from '../../services/api';
import camera from '../../assets/camera.png';
import './styles.css';

export default function New({ history }) {

	const [thumbnail, setThumbnail] = useState(null);
	const [company, setCompany] = useState('');
	const [techs, setTechs] = useState('');
	const [price, setPrice] = useState('');

	const preview = useMemo(() => {
			return thumbnail ? URL.createObjectURL(thumbnail) : null;
		}, [thumbnail])

	async function handleSubmit(event) {
		event.preventDefault();
		const data = new FormData();
		const user_id = localStorage.getItem('user');

		data.append('thumbnail', thumbnail);
		data.append('company', company);
		data.append('techs', techs);
		data.append('price', price);

		await api.post('/spots', data, {
			headers: { user_id }
		})

		history.push('/dashboard');
	}

	return (
		<form onSubmit={handleSubmit}>

			<label
				id="thumbnail"
				style={{ backgroundImage: `url(${preview})` }}
				className={thumbnail && 'has-thumbnail'}
			>
				<input type="file" onChange={event => setThumbnail(event.target.files[0])} />
				<img src={camera} alt="camera" className="icon" />
			</label>

			<label htmlFor="company">Empresa *</label>
			<input
				id="company"
				type="text"
				value={company}
				onChange={event => setCompany(event.target.value)}
				placeholder="Sua empresa incrível"
			/>

			<label htmlFor="techs">Tecnologias *<span>(separadas por vírgula)</span></label>
			<input
				id="techs"
				type="text"
				value={techs}
				onChange={event => setTechs(event.target.value)}
				placeholder="Quais tecnologias usam?"
			/>

			<label htmlFor="price">Valor da diária *<span>(em branco para FREE)</span></label>
			<input
				id="price"
				type="text"
				value={price}
				onChange={event => setPrice(event.target.value)}
				placeholder="Valor cobrado por dia"
			/>

			<button type="submit" className="btn">cadastrar</button>
		</form>
	)
}