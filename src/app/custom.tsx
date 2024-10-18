"use client"

import React, { ReactNode } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Customtool from "./custom2";


interface MediaCardProps {
    onSendComponent: (component: React.ReactNode) => void;
}

const MediaCard: React.FC<MediaCardProps> = ({ onSendComponent }) => {


    const handleSendComponent = () => {
        onSendComponent(<Customtool />);
    };

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image="https://img.freepik.com/premium-photo/mountain-lake-with-reflection-trees-mountains-background_583952-93299.jpg"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small" onClick={handleSendComponent}>Learn More</Button>
            </CardActions>
        </Card>
    );
}

export default MediaCard;


