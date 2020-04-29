package com.everis.evereval.manager.dto;

import java.util.ArrayList;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class QuizQuestionDTO {

	private Long id;
	private QuestionDTO question;
	private List<AnswerDTO> answers = new ArrayList<>();

}
