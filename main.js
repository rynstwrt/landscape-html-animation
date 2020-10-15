const blueSky = getComputedStyle(document.documentElement).getPropertyValue('--skycolor');
const greenGrass = getComputedStyle(document.documentElement).getPropertyValue('--grasscolor');

$(window).one('load', () =>
{
	$('#introanimation').css({'display': 'block'});
	// first horizontal bar
	$('#bar').css({'width': '100%'}).one(transitionendevents, () =>
	{
		// horizontal bar moves up
		$('#bar').attr('style', function(i,s) { return (s||'') + `top: ${$('#box1').css('height')} !important;`}).one(transitionendevents, () =>
		{
			// bottom box turns green
			$('#box2').css({'background-color': greenGrass}).one(transitionendevents, () =>
			{
				// top box turns blue
				$('#box1').css({'background-color': blueSky}).one(transitionendevents, () =>
				{
					// shrink bar
					$('#bar').css({'opacity' : '0'}).one(transitionendevents, () =>
					{
						//fade in grass
						$('#overlay').css({'opacity': '1'}).one(transitionendevents, () =>
						{
							// scroll in path
							$('#path').css({'width': '100%', 'height': '100%'}).one(transitionendevents, () =>
							{
								// scroll in trees
								$('.tree').css({'height': `${parseInt(getComputedStyle(document.documentElement).getPropertyValue('--unitwidth')) * 2}px`}).one(transitionendevents, () =>
								{
									// scroll in fence
									$('#fence').css({'height': `${parseInt(getComputedStyle(document.documentElement).getPropertyValue('--unitwidth'))}px`}).one(transitionendevents, () =>
									{
										// fade in sun
										$('#sun').css({'opacity': '1'}).one(transitionendevents, () =>
										{
											// scroll in box shadows
											$('#box2').css({'box-shadow': '0px -10px 10px rgba(0, 0, 0, .07)'});
											$('.tree').css({'filter': 'drop-shadow(0 -10px 5px rgba(0, 0, 0, .1))'});
											$('#fence').css({'filter': 'drop-shadow(0 -10px 5px rgba(0, 0, 0, .1))'});
										});
									});
								});
							});
						});
					});
				});
			});
		});
	});
});
