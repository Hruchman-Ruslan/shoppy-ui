'use client'

import { Box, Button, Modal, Stack, TextField } from '@mui/material'
import { useActionState, useState } from 'react'
import { FormResponse } from '../common/interfaces/form-response.interface'

const styles = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
}

interface CreateProductModalProps {
	open: boolean
	handleClose: () => void
}

export default function CreateProductModal({
	open,
	handleClose,
}: CreateProductModalProps) {
	const [response, setResponse] = useState<FormResponse>()

	return (
		<Modal open={open} onClose={handleClose}>
			<Box sx={styles}>
				<form className='w-full max-w-xs'>
					<Stack spacing={2}>
						<TextField
							name='name'
							label='Name'
							variant='outlined'
							required
							helperText={response?.error}
							error={!!response?.error}
						/>
						<TextField
							name='description'
							label='Description'
							variant='outlined'
							required
							helperText={response?.error}
							error={!!response?.error}
						/>
						<TextField
							name='price'
							label='Price'
							variant='outlined'
							required
							helperText={response?.error}
							error={!!response?.error}
						/>
						<Button type='submit' variant='contained'>
							Submit
						</Button>
					</Stack>
				</form>
			</Box>
		</Modal>
	)
}