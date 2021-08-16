import React from 'react';
import useFireStore from '../hooks/useFireStore';
import { motion } from 'framer-motion';

const ImageGrid = ({setSelectedImg}) => {
    const { docs } = useFireStore('images');
    console.log(docs);
    return (
        <div className="img-grid">
            {docs && docs.map(doc =>(
                <motion.div className="img-wrap" 
                    whileHover={{opacity: 1}}
                    layout
                    onClick={() => setSelectedImg(doc.url)} key={doc.id}>
                    <motion.img initial={{opacity: 0}} 
                        animate={{opacity: 1}}
                        transition={{delay: 1}}
                        src={doc.url} alt="Uploaded pic"/>
                </motion.div>
            ))}
        </div>
    )
}

export default ImageGrid;