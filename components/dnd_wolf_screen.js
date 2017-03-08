import DropzoneReveal from 'shared/components/dropzone_reveal/0.2';

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="dnd-wolf"
        >
            <DropzoneReveal
                ref="dropzone-reveal"
                dropzoneAssets={[
                    <skoash.Audio ref="drag" type="sfx" src="media/audio/drag.mp3" />,
                    <skoash.Audio ref="correct" type="sfx" src="media/audio/drag-correct.mp3" />,
                    <skoash.Audio ref="incorrect" type="sfx" src="media/audio/drag-incorrect.mp3" complete />
                ]}
                dropzones={[
                    <skoash.ListItem ref="wolf" answers={['0']} className="wolf animated" />
                ]}
                dropzoneList={[
                    <skoash.ListItem ref="dog" className="dog animated" message="dog" return />,
                    <skoash.ListItem ref="wolf" className="wolf animated" message="wolf" return />,
                    <skoash.ListItem ref="cow" className="cow animated" message="cow" return />
                ]}
                revealList={[
                    <skoash.ListItem ref="wolf">
                        <h3>
                            Wolves have been found in<br/>
                            more places on earth than<br/>
                            any other mammals<br/>
                            except humans!
                        </h3>
                    </skoash.ListItem>
                ]}
                revealAssets={[
                    <skoash.Audio ref="0" type="voiceOver" src="media/audio/VO_19-1.mp3" />
                ]}
                closeRespond={function () {
                    skoash.trigger('goto', {index: _.parseInt(key) + 1});
                }}
            />
        </skoash.Screen>
    );
}
