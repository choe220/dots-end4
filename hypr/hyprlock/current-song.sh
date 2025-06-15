!/bin/bash

song_info=$(playerctl metadata --format "{{artist}} - {{title}}")
text_length=(echo "$song_info" | awk '{print length}')

echo "$song_info:$text_length"
