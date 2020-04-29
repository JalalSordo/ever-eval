package com.everis.evereval.manager.transformer;

import org.springframework.beans.factory.annotation.Autowired;

import com.everis.evereval.dao.entity.QuizQuestion;
import com.everis.evereval.manager.dto.QuizQuestionDTO;
import com.everis.evereval.manager.service.QuestionService;

public class QuizQuestionTransformer extends Transformer<QuizQuestion, QuizQuestionDTO> {

	AnswerTransformer answerTransformer = new AnswerTransformer();
	QuestionTransformer questionTransformer = new QuestionTransformer();
	@Autowired
	QuestionService questionService;

	@Override
	public QuizQuestion toEntity(QuizQuestionDTO dto) {
		
		if (dto == null) {
			return null;
		}

		return new QuizQuestion(dto.getId(), questionTransformer.toEntity(dto.getQuestion()),
				answerTransformer.toEntityList(dto.getAnswers()));
	}

	@Override
	public QuizQuestionDTO toDTO(QuizQuestion entity) {

		if (entity == null) {
			return null;
		}

		return new QuizQuestionDTO(entity.getId(), questionTransformer.toDTO(entity.getQuestion()),
				answerTransformer.toDTOList(entity.getAnswers()));
	}

}
