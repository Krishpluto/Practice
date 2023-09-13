import React from 'react'
import { SketchPicker } from 'react-color';
import { useSnapshot } from 'valtio';

import state from '../store';

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className="absolute left-full ml-3">
      <SketchPicker 
      color={snap.color}
      disableAlpha
      presetColors={[
        '#000000', '#808080', '#c0c0c0', '#ffffff', '#800000', '#ff0000', '	#800080', '	#ff00ff', '#008000', '	#00ff00', '	#808000', '#ffff00', '#000080', '#0000ff', '#008080', '#0000ff', '#ffa500'
      ]}
      onChange={(color) => state.color = color.hex}

      />
      
    </div>
  )
}

export default ColorPicker