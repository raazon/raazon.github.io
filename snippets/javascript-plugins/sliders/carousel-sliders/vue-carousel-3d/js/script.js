/**
 * Created by CSS on 3/20/2017.
 */

// Only Image Slider
new Vue({
    el: '#only-image-slide',
    data: {
        slides: 1
    },
    components: {
        'carousel-3d': Carousel3d.Carousel3d,
        'slide': Carousel3d.Slide
    }
});

// Image + Text + Controls
new Vue({
    el: '#image-text-slide',
    data: {
        slides: 1
    },
    components: {
        'carousel-3d': Carousel3d.Carousel3d,
        'slide': Carousel3d.Slide
    }
});

// Example 3
new Vue({
    el: '#ex-3',
    data: {
        slides: 1
    },
    components: {
        'carousel-3d': Carousel3d.Carousel3d,
        'slide': Carousel3d.Slide
    }
});

// Example 4
new Vue({
    el: '#ex-4',
    data: {
        slides: 7
    },
    components: {
        'carousel-3d': Carousel3d.Carousel3d,
        'slide': Carousel3d.Slide
    }
});