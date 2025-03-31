import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import Track from '../components/Track/Track';

describe('Track Component', () => {
    
    it('has a track component that is rendered', ()=>{
   
        const {container} = render(<Track />);
        expect(container.firstChild).toBeTruthy();

    });

    it('has a track name', () => { 

        const trackName = "Jamming";
        render(<Track trackName={trackName}/>);
        const expectedElement = screen.getByText(trackName);
        expect(expectedElement).toBeInTheDocument();
        
    });
    
});