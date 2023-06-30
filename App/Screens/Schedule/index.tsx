import React from 'react';
import { View } from 'react-native';
import { ShowSchedule } from '../../Components';
import { PageContainer } from '../../Containers';
import Themes from '../../Themes';

const Schedule = () => {
  return (
    <PageContainer style={Themes.colors.bgWhite} safeareaEdges={['left', 'right', 'bottom']}>
      <View style={[Themes.utils.pt16, Themes.colors.bgWhite]}>
        <ShowSchedule icon="truckIcon" text="Load in" time="3:30pm - 4:30pm" />
        <ShowSchedule icon="volumeIcon" text="Sound check" time="4:30pm - 5:30pm" />
        <ShowSchedule icon="keyIcon" text="Doors open" time="6:00pm" />
        <ShowSchedule icon="musicNoteIcon" text="Showtime" time="8:15pm - 9:00pm" />
        <ShowSchedule icon="volumeXIcon" text="Hard curfew" time="11:00pm" />
      </View>
    </PageContainer>
  );
};

export default Schedule;
