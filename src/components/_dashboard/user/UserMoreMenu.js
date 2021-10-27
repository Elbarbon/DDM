import { Icon } from '@iconify/react';
import { useRef, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import barChartOutlined from '@iconify/icons-ant-design/bar-chart-outlined';
import moreVerticalFill from '@iconify/icons-eva/more-vertical-fill';
import magnifyingGlassBold from '@iconify/icons-ph/magnifying-glass-bold';
import chartAverage from '@iconify/icons-carbon/chart-average';
import mapIcon from '@iconify/icons-akar-icons/map';
import cameraOutlined from '@iconify/icons-ant-design/camera-outlined';
import alarmIcon from '@iconify/icons-akar-icons/alarm';
// material
import { Menu, MenuItem, IconButton, ListItemIcon, ListItemText } from '@mui/material';

// ----------------------------------------------------------------------

export default function UserMoreMenu() {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <IconButton ref={ref} onClick={() => setIsOpen(true)}>
        <Icon icon={moreVerticalFill} width={20} height={20} />
      </IconButton>

      <Menu
        open={isOpen}
        anchorEl={ref.current}
        onClose={() => setIsOpen(false)}
        PaperProps={{
          sx: { width: 200, maxWidth: '100%' }
        }}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem sx={{ color: 'text.secondary' }}>
          <ListItemIcon>
            <Icon icon={barChartOutlined} width={24} height={24} />
          </ListItemIcon>
          <ListItemText primary="Gráfico" primaryTypographyProps={{ variant: 'body2' }} />
        </MenuItem>
        <MenuItem component={RouterLink} to="#" sx={{ color: 'text.secondary' }}>
          <ListItemIcon>
            <Icon icon={magnifyingGlassBold} width={24} height={24} />
          </ListItemIcon>
          <ListItemText primary="Detalle" primaryTypographyProps={{ variant: 'body2' }} />
        </MenuItem>
        <MenuItem sx={{ color: 'text.secondary' }}>
          <ListItemIcon>
            <Icon icon={chartAverage} width={24} height={24} />
          </ListItemIcon>
          <ListItemText primary="Rendimiento" primaryTypographyProps={{ variant: 'body2' }} />
        </MenuItem>
        <MenuItem sx={{ color: 'text.secondary' }}>
          <ListItemIcon>
            <Icon icon={mapIcon} width={24} height={24} />
          </ListItemIcon>
          <ListItemText primary="Mapa" primaryTypographyProps={{ variant: 'body2' }} />
        </MenuItem>
        <MenuItem sx={{ color: 'text.secondary' }}>
          <ListItemIcon>
            <Icon icon={cameraOutlined} width={24} height={24} />
          </ListItemIcon>
          <ListItemText primary="Fotos" primaryTypographyProps={{ variant: 'body2' }} />
        </MenuItem>
        <MenuItem sx={{ color: 'text.secondary' }}>
          <ListItemIcon>
            <Icon icon={alarmIcon} width={24} height={24} />
          </ListItemIcon>
          <ListItemText primary="Alarmas" primaryTypographyProps={{ variant: 'body2' }} />
        </MenuItem>
      </Menu>
    </>
  );
}
